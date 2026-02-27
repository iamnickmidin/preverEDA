import { useMemo, useRef, useState, type CSSProperties, type PointerEventHandler } from "react";
import { foods, type Food } from "./data/foods";

type Direction = "like" | "dislike";

type Filters = {
  category: string;
  tag: string;
};

type HistoryItem = {
  food: Food;
  direction: Direction;
  rating: string | null;
  at: string;
};

type PersistedState = {
  index: number;
  history: HistoryItem[];
  filters: Filters;
};

const stateKey = "foodSwipeState";

function loadSavedState(): PersistedState {
  const fallback: PersistedState = {
    index: 0,
    history: [],
    filters: { category: "", tag: "" }
  };

  const raw = localStorage.getItem(stateKey);
  if (!raw) return fallback;

  try {
    const parsed = JSON.parse(raw) as Partial<PersistedState>;
    if (typeof parsed.index !== "number" || !Array.isArray(parsed.history)) {
      return fallback;
    }

    return {
      index: parsed.index,
      history: parsed.history,
      filters: parsed.filters ?? { category: "", tag: "" }
    };
  } catch {
    return fallback;
  }
}

function App() {
  const initial = useMemo(loadSavedState, []);
  const [index, setIndex] = useState(initial.index);
  const [history, setHistory] = useState<HistoryItem[]>(initial.history);
  const [filters, setFilters] = useState<Filters>(initial.filters);
  const [showInsights, setShowInsights] = useState(true);
  const [pendingRating, setPendingRating] = useState<number | null>(null);
  const [photoIndexes, setPhotoIndexes] = useState<Record<string, number>>({});
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const dragStart = useRef({ x: 0, y: 0 });
  const topCardRef = useRef<HTMLDivElement | null>(null);

  const filteredFoods = useMemo(() => {
    return foods.filter((food) => {
      if (filters.category && food.category !== filters.category) return false;
      if (filters.tag && !food.tags.includes(filters.tag)) return false;
      return true;
    });
  }, [filters]);

  const current = filteredFoods[index];

  const persistState = (next: PersistedState) => {
    localStorage.setItem(stateKey, JSON.stringify(next));
  };

  const commitSwipe = (direction: Direction) => {
    if (!current) return;

    const nextItem: HistoryItem = {
      food: current,
      direction,
      rating: null,
      at: new Date().toISOString()
    };

    const nextHistory = [...history, nextItem];
    const nextIndex = index + 1;

    setHistory(nextHistory);
    setIndex(nextIndex);

    if (direction === "like") {
      setPendingRating(history.length);
    }

    persistState({ index: nextIndex, history: nextHistory, filters });
  };

  const swipe = (direction: Direction) => {
    if (!topCardRef.current) {
      commitSwipe(direction);
      return;
    }

    const card = topCardRef.current;
    const multiplier = direction === "like" ? 1 : -1;
    card.style.transform = `translate(${multiplier * 600}px, -40px) rotate(${multiplier * 12}deg)`;
    card.style.opacity = "0";

    window.setTimeout(() => {
      setDragOffset({ x: 0, y: 0 });
      setIsDragging(false);
      commitSwipe(direction);
    }, 180);
  };

  const undo = () => {
    if (!history.length) return;

    const nextHistory = history.slice(0, -1);
    const nextIndex = Math.max(0, index - 1);

    setHistory(nextHistory);
    setIndex(nextIndex);
    setPendingRating(null);
    persistState({ index: nextIndex, history: nextHistory, filters });
  };

  const resetAll = () => {
    setIndex(0);
    setHistory([]);
    setPendingRating(null);
    persistState({ index: 0, history: [], filters });
  };

  const exportData = () => {
    const payload = {
      generatedAt: new Date().toISOString(),
      totalFoods: foods.length,
      history,
      filters
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "foodswipe-results.json";
    link.click();
    URL.revokeObjectURL(url);
  };

  const setRating = (value: string) => {
    if (pendingRating === null) return;

    const nextHistory = history.map((item, itemIndex) => {
      if (itemIndex !== pendingRating) return item;
      return { ...item, rating: value };
    });

    setHistory(nextHistory);
    setPendingRating(null);
    persistState({ index, history: nextHistory, filters });
  };

  const closeRatingSheet = () => {
    setPendingRating(null);
  };

  const applyFilters = (nextFilters: Filters) => {
    setFilters(nextFilters);
    setIndex(0);
    persistState({ index: 0, history, filters: nextFilters });
  };

  const likes = useMemo(() => history.filter((item) => item.direction === "like"), [history]);
  const dislikes = useMemo(() => history.filter((item) => item.direction === "dislike"), [history]);

  const aggregateTags = (list: HistoryItem[]) => {
    const counter = new Map<string, number>();
    list.forEach((item) => {
      [...item.food.tags, item.food.category].forEach((tag) => {
        counter.set(tag, (counter.get(tag) ?? 0) + 1);
      });
    });
    return [...counter.entries()].sort((a, b) => b[1] - a[1]);
  };

  const likeTags = useMemo(() => aggregateTags(likes), [likes]);
  const dislikeTags = useMemo(() => aggregateTags(dislikes), [dislikes]);

  const insights = useMemo(() => {
    const result: string[] = [];

    if (likeTags.length) {
      result.push(`Часто нравятся: ${likeTags.slice(0, 3).map((item) => item[0]).join(", ")}.`);
    }

    if (dislikeTags.length) {
      result.push(`Часто не нравятся: ${dislikeTags.slice(0, 3).map((item) => item[0]).join(", ")}.`);
    }

    if (likeTags.length && dislikeTags.length) {
      const likeSet = new Set(likeTags.map((item) => item[0]));
      const overlap = dislikeTags.find((item) => likeSet.has(item[0]));
      if (overlap) {
        result.push(`Смешанные реакции на: ${overlap[0]}. Возможно, важно приготовление.`);
      }
    }

    if (!result.length) {
      result.push("Свайпайте блюда, чтобы появились наблюдения.");
    }

    return result;
  }, [dislikeTags, likeTags]);

  const categories = useMemo(
    () => [...new Set(foods.map((food) => food.category))].sort((a, b) => a.localeCompare(b, "ru")),
    []
  );
  const tags = useMemo(
    () => [...new Set(foods.flatMap((food) => food.tags))].sort((a, b) => a.localeCompare(b, "ru")),
    []
  );

  const remainingCards = filteredFoods.slice(index, index + 3);

  const updatePhoto = (key: string, total: number) => {
    setPhotoIndexes((prev) => ({ ...prev, [key]: ((prev[key] ?? 0) + 1) % total }));
  };

  const onPointerDown: PointerEventHandler<HTMLDivElement> = (event) => {
    if (!current) return;
    setIsDragging(true);
    dragStart.current = { x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove: PointerEventHandler<HTMLDivElement> = (event) => {
    if (!isDragging) return;

    const x = event.clientX - dragStart.current.x;
    const y = event.clientY - dragStart.current.y;
    setDragOffset({ x, y });
  };

  const onPointerUp = () => {
    if (!isDragging) return;

    setIsDragging(false);
    if (dragOffset.x > 120) {
      swipe("like");
      return;
    }

    if (dragOffset.x < -120) {
      swipe("dislike");
      return;
    }

    setDragOffset({ x: 0, y: 0 });
  };

  return (
    <main className="app">
      <header className="topbar">
        <button className="icon-btn" title="Сбросить все результаты" onClick={resetAll}>
          ⟳
        </button>
        <div className="brand">
          <span className="brand-dot" />
          <span className="brand-title">FoodSwipe</span>
        </div>
        <button className="icon-btn" title="Экспорт" onClick={exportData}>
          ⬇
        </button>
      </header>

      <section className="stage">
        <div className="filters">
          <select
            className="filter"
            value={filters.category}
            onChange={(event) => applyFilters({ ...filters, category: event.target.value })}
          >
            <option value="">Все кухни</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <select
            className="filter"
            value={filters.tag}
            onChange={(event) => applyFilters({ ...filters, tag: event.target.value })}
          >
            <option value="">Все теги</option>
            {tags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>

          <button className="pill" onClick={() => applyFilters({ category: "", tag: "" })}>
            Сброс фильтров
          </button>
        </div>

        <div className="card-stack" aria-live="polite">
          {!filteredFoods.length && <div className="empty">По фильтрам нет блюд. Сбросьте фильтры.</div>}

          {!!filteredFoods.length && !current && (
            <div className="empty">Все блюда оценены. Нажмите сброс или экспортируйте результаты.</div>
          )}

          {remainingCards
            .map((food, stackIndex) => ({
              food,
              stackIndex,
              cardKey: `${food.name}-${index + stackIndex}`
            }))
            .reverse()
            .map(({ food, stackIndex, cardKey }) => {
              const isTop = stackIndex === 0;
              const photoIndex = photoIndexes[cardKey] ?? 0;
              const x = isTop ? dragOffset.x : 0;
              const y = isTop ? dragOffset.y : 0;
              const rotate = x * 0.08;

              const style: CSSProperties = {
                transform: isTop
                  ? `translate(${x}px, ${y}px) rotate(${rotate}deg)`
                  : `translateY(6px) scale(0.98)`,
                opacity: isTop ? 1 : 0.6
              };

              const showLike = isTop && dragOffset.x > 60;
              const showDislike = isTop && dragOffset.x < -60;

              return (
                <div
                  key={cardKey}
                  className={`card ${isDragging && isTop ? "grabbing" : ""} ${showLike ? "show-like" : ""} ${showDislike ? "show-dislike" : ""}`}
                  style={style}
                  ref={isTop ? topCardRef : undefined}
                  onPointerDown={isTop ? onPointerDown : undefined}
                  onPointerMove={isTop ? onPointerMove : undefined}
                  onPointerUp={isTop ? onPointerUp : undefined}
                  onPointerCancel={isTop ? onPointerUp : undefined}
                  tabIndex={food.photos.length > 1 ? 0 : -1}
                  onDoubleClick={() => food.photos.length > 1 && updatePhoto(cardKey, food.photos.length)}
                  onKeyDown={(event) => {
                    if (event.key === " " && food.photos.length > 1) {
                      event.preventDefault();
                      updatePhoto(cardKey, food.photos.length);
                    }
                  }}
                >
                  <div className="food-photo" style={{ backgroundImage: `url('${food.photos[photoIndex]}')` }} />
                  <div className="photo-overlay" />

                  {food.photos.length > 1 && (
                    <div className="photo-dots">
                      {food.photos.map((_, photoDotIndex) => (
                        <span
                          key={`${cardKey}-dot-${photoDotIndex}`}
                          className={`photo-dot ${photoDotIndex === photoIndex ? "active" : ""}`}
                        />
                      ))}
                    </div>
                  )}

                  <div className="like-stamp">нравится</div>
                  <div className="dislike-stamp">не нравится</div>

                  <div className="card-header">
                    <h2 className="food-name">{food.name}</h2>
                    <span className="badge">{food.category}</span>
                  </div>

                  <div />

                  <div className="tag-list">
                    {food.tags.map((tag) => (
                      <span key={`${cardKey}-${tag}`} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>

        <div className="swipe-hint">
          <span>Свайп влево — не нравится</span>
          <span>Свайп вправо — нравится</span>
        </div>
      </section>

      <section className="actions">
        <button className="pill" onClick={undo}>
          Отменить
        </button>
        <button className="fab danger" aria-label="Не нравится" onClick={() => swipe("dislike")}>
          ✕
        </button>
        <button className="fab success" aria-label="Нравится" onClick={() => swipe("like")}>
          ❤
        </button>
        <button className="pill" onClick={() => setShowInsights((prev) => !prev)}>
          {showInsights ? "Скрыть" : "Профиль"}
        </button>
      </section>

      <div
        className={`rating-sheet ${pendingRating !== null ? "is-open" : ""}`}
        aria-hidden={pendingRating === null}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeRatingSheet();
        }}
      >
        <div className="sheet">
          <h3>Насколько зашло?</h3>
          <div className="rating-options">
            <button onClick={() => setRating("1")}>Супер клево</button>
            <button onClick={() => setRating("2")}>Супер вайбик</button>
            <button onClick={() => setRating("3")}>Супер вкусно</button>
            <button onClick={() => setRating("4")}>Супер съем</button>
          </div>
          <button className="pill" onClick={closeRatingSheet}>
            Без допоценки
          </button>
        </div>
      </div>

      <section className={`insights ${showInsights ? "" : "is-hidden"}`}>
        <div className="panel">
          <h2>Профиль вкуса</h2>
          <div className="stats">
            <div className="stat">
              <div className="stat-label">Нравится</div>
              <div className="stat-value">{likes.length}</div>
            </div>
            <div className="stat">
              <div className="stat-label">Не нравится</div>
              <div className="stat-value">{dislikes.length}</div>
            </div>
            <div className="stat">
              <div className="stat-label">Оценено</div>
              <div className="stat-value">{history.length}</div>
            </div>
            <div className="stat">
              <div className="stat-label">Осталось</div>
              <div className="stat-value">{Math.max(0, filteredFoods.length - index)}</div>
            </div>
          </div>

          <div className="lists">
            <div>
              <h3>Топ нравится</h3>
              <ol className="rank-list">
                {likeTags.length ? (
                  likeTags.slice(0, 5).map(([tag, count]) => <li key={`like-${tag}`}>{`${tag} · ${count}`}</li>)
                ) : (
                  <li>Пока нет данных</li>
                )}
              </ol>
            </div>

            <div>
              <h3>Топ не нравится</h3>
              <ol className="rank-list">
                {dislikeTags.length ? (
                  dislikeTags
                    .slice(0, 5)
                    .map(([tag, count]) => <li key={`dislike-${tag}`}>{`${tag} · ${count}`}</li>)
                ) : (
                  <li>Пока нет данных</li>
                )}
              </ol>
            </div>
          </div>

          <div>
            <h3>Наблюдения</h3>
            <ul className="insight-list">
              {insights.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="panel secondary">
          <h2>Как пользоваться</h2>
          <ul className="guide">
            <li>Свайп влево — блюдо не нравится, свайп вправо — нравится.</li>
            <li>Можно нажимать кнопки снизу.</li>
            <li>Экспорт сохранит результаты в JSON для анализа.</li>
            <li>Данные сохраняются локально в браузере.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default App;
