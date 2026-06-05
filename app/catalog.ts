export interface CatalogMovie {
  title: string;
  zh: string;
  year: string;
  released: string;
  genre: string;
  amc: string;
  rank: number;
  /** Baked IMDb rating — precomputed so homepage sorts with zero network cost.
   *  Refresh via /update-amc (runs IMDb scrape for every title and rewrites this field). */
  imdbScore: number | null;
  /** Baked poster URL (OMDb / IMDb, already upscaled to _V1_QL90_UX1200_.jpg).
   *  Precomputed so the homepage + editor slate paint posters with zero network cost.
   *  Refresh via `npm run bake-posters` (standalone) or `/update-amc` (for new movies). */
  posterUrl: string | null;
}

// 数据来源：amctheatres.com/movies CDP 实时抓取，2026-06-05
// IMDb 分数：刻入本文件，首页直接按 imdbScore 本地排序，不再 mount 时并发 fetch。
// 自动更新：launchd 每日拉取 AMC 官网，新片 zh 译名由 Gemini 2.5 Flash 生成；
//          新片的 imdbScore 从 OMDb/IMDb 实时抓取；老片 imdbScore 保持继承。
//          rank 保持既有顺序，新片追加末尾；运行 /update-amc 可手动重排评分
export const MOVIE_CATALOG: CatalogMovie[] = [
  { title: "Project Hail Mary",                        zh: "挽救计划",                                 year: "2026", released: "March 20, 2026", genre: "科幻", amc: "project-hail-mary-76779",                       rank:  1, imdbScore: 8.4, posterUrl: "https://m.media-amazon.com/images/M/MV5BNTkwNzJiYTctNzI3NC00NjE1LTlhYjktY2Q5MTdmMWFmNzcxXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "The Super Mario Galaxy Movie",             zh: "超级马里奥银河电影版",                           year: "2026", released: "April 3, 2026",  genre: "动画", amc: "the-super-mario-galaxy-movie-71465",            rank:  2, imdbScore: 6.5, posterUrl: "https://m.media-amazon.com/images/M/MV5BNDMyODQzZjAtNmYxYS00YjNiLWEzYTMtNzgyZWE5ODBkZDVhXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "Michael",                                  zh: "迈克",                                   year: "2026", released: "April 24, 2026", genre: "喜剧", amc: "michael-75846",                                 rank:  3, imdbScore: 5.7, posterUrl: "https://m.media-amazon.com/images/M/MV5BNzllNmRlN2EtMDQyOC00ODJjLTg4OWQtZDNmNGU3YzlkNjc1XkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "Star Wars: The Mandalorian and Grogu",     zh: "Star Wars: The Mandalorian and Grogu", year: "2026", released: "May 22, 2026",   genre: "动作", amc: "star-wars-the-mandalorian-and-grogu-60322",     rank:  4, imdbScore: null, posterUrl: "https://m.media-amazon.com/images/M/MV5BYzVkMmJhNTgtNjYwOS00YjM0LThlNWEtNGExNmIxZjVkMmJhXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "Passenger",                                zh: "旅客",                                   year: "2026", released: "May 22, 2026",   genre: "剧情", amc: "passenger-82485",                               rank:  5, imdbScore: 7.4, posterUrl: "https://m.media-amazon.com/images/M/MV5BNDhmZmJlMDctNTA3MS00NTkwLThkZGQtMjM5MTdmMDg2YjBjXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "I Love Boosters",                          zh: "我爱",                                   year: "2026", released: "May 22, 2026",   genre: "动作", amc: "i-love-boosters-82045",                         rank:  6, imdbScore: 5.4, posterUrl: "https://m.media-amazon.com/images/M/MV5BODQwZDU4ZmQtOWE4Yy00ZWZmLTgzZjItNWUxOThmMzcxM2FiXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "The Devil Wears Prada 2",                  zh: "The Devil Wears Prada 2",              year: "2026", released: "May 1, 2026",    genre: "喜剧", amc: "the-devil-wears-prada-2-80466",                 rank:  7, imdbScore: 7.0, posterUrl: "https://m.media-amazon.com/images/M/MV5BZmM3ZDU3ODItZmY5Yi00OTQ2LWE5OTctZTA5NDBhMWJkOGY3XkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "Obsession",                                zh: "痴迷",                                   year: "2026", released: "May 15, 2026",   genre: "剧情", amc: "obsession-82063",                               rank:  8, imdbScore: 6.7, posterUrl: "https://m.media-amazon.com/images/M/MV5BYzc1NWUwMDgtNGZlMS00ZmYzLWIzMzktNmMxMmY1MTUzNWExXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "Mortal Kombat II",                         zh: "真人",                                   year: "2026", released: "May 8, 2026",    genre: "动作", amc: "mortal-kombat-ii-71233",                        rank:  9, imdbScore: null, posterUrl: "https://m.media-amazon.com/images/M/MV5BNTg2YWNkN2EtMzc1Ny00ZTBhLWFmYTItMmMyNzhjNjhhNmVhXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "The Sheep Detectives",                     zh: "The Sheep Detectives",                 year: "2026", released: "May 8, 2026",    genre: "动作", amc: "the-sheep-detectives-77276",                    rank: 10, imdbScore: null, posterUrl: "https://m.media-amazon.com/images/M/MV5BNTFmZWI4YmMtNmQ0ZC00ZGQwLTk1OWEtZjAyZmIzOGY0MGFiXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "Backrooms",                                zh: "后室",                                   year: "2026", released: "May 29, 2026",   genre: "恐怖", amc: "backrooms-83009",                               rank: 11, imdbScore: 7.1, posterUrl: "https://m.media-amazon.com/images/M/MV5BYzQyYjZmMjctMzIyZi00MDI0LWJhNGQtMzQ3MTFlNDgwNGM5XkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "The Breadwinner",                          zh: "The Breadwinner",                      year: "2026", released: "May 29, 2026",   genre: "动画", amc: "the-breadwinner-79903",                         rank: 12, imdbScore: 7.7, posterUrl: "https://m.media-amazon.com/images/M/MV5BZTQ3ZWQ4YTctMTI0OC00NmI5LWFlNjgtNjhhMDQxYjUxYTQyXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "Pressure",                                 zh: "压力",                                   year: "2026", released: "May 29, 2026",   genre: "剧情", amc: "pressure-82757",                                rank: 13, imdbScore: 5.6, posterUrl: "https://m.media-amazon.com/images/M/MV5BYjkwMTkwYzItNTg4MC00OTc2LTk2Y2EtOGU3ZGE0NmQyYzdjXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "Tuner",                                    zh: "调",                                    year: "2026", released: "May 22, 2026",   genre: "剧情", amc: "tuner-82606",                                   rank: 14, imdbScore: 7.3, posterUrl: "https://m.media-amazon.com/images/M/MV5BNDA0ZjZjYTktZjg1MC00MDRiLWEzYjItMTQ1ZWFkOTUxNjc0XkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "Power Ballad",                             zh: "Power Ballad",                         year: "2026", released: "May 29, 2026",   genre: "喜剧", amc: "power-ballad-81983",                            rank: 15, imdbScore: 7.3, posterUrl: "https://m.media-amazon.com/images/M/MV5BYWI3NGZlNDQtMTAwMC00MGVmLTkyMzgtNjNmYjFhY2VhNDUyXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "Scary Movie",                              zh: "惊声",                                   year: "2026", released: "June 5, 2026",   genre: "喜剧", amc: "scary-movie-79322",                             rank: 16, imdbScore: 6.3, posterUrl: "https://m.media-amazon.com/images/M/MV5BNTJjMDk1NzAtMGVmNS00NTFmLWFlOTQtZDk5M2I2NjZiZDdlXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "Masters of the Universe",                  zh: "宇宙",                                   year: "2026", released: "June 5, 2026",   genre: "动作", amc: "masters-of-the-universe-76888",                 rank: 17, imdbScore: 5.4, posterUrl: "https://m.media-amazon.com/images/M/MV5BMTJjYTFkM2EtZjBmNy00OTk2LTg0NTAtNzYxYzlmNjhkMzQ5XkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "The Amazing Digital Circus: The Last Act", zh: "奇异数字",                                 year: "2026", released: "June 4, 2026",   genre: "动画", amc: "the-amazing-digital-circus-the-last-act-83492", rank: 18, imdbScore: null, posterUrl: "https://m.media-amazon.com/images/M/MV5BODQ0NzQ2YTYtZDc2NS00YTlmLThjNmYtMWRkN2VkNzI4NWNhXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "Carolina Caroline",                        zh: "卡",                                    year: "2026", released: "June 5, 2026",   genre: "剧情", amc: "carolina-caroline-82532",                       rank: 19, imdbScore: 7.4, posterUrl: "https://m.media-amazon.com/images/M/MV5BZDYxMWYwYzAtOWFkMi00MWZjLTg2ODYtZTVhZjQ0ZTg1ZmJiXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "Milk",                                     zh: "米",                                    year: "2026", released: "June 5, 2026",   genre: "剧情", amc: "milk-83936",                                    rank: 20, imdbScore: 7.5, posterUrl: null },
  { title: "Hai Jawani Toh Ishq Hona Hai",             zh: "青春",                                   year: "2026", released: "June 5, 2026",   genre: "喜剧", amc: "hai-jawani-toh-ishq-hona-hai-83738",            rank: 21, imdbScore: null, posterUrl: "https://m.media-amazon.com/images/M/MV5BZWE1OTg5ZDMtYjllZC00YzE2LTg1N2UtZmI0OTBmMWE3NzFkXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "The Last Whale Singer",                    zh: "The Last Whale Singer",                year: "2026", released: "June 5, 2026",   genre: "动画", amc: "the-last-whale-singer-83485",                   rank: 22, imdbScore: null, posterUrl: null },
  { title: "Trainspotting",                            zh: "猜",                                    year: "2026", released: "June 5, 2026",   genre: "剧情", amc: "trainspotting-4k-83465",                        rank: 23, imdbScore: 8.1, posterUrl: null },
  { title: "Peddi",                                    zh: "Peddi",                                year: "2026", released: "June 4, 2026",   genre: "动作", amc: "peddi-83161",                                   rank: 24, imdbScore: null, posterUrl: "https://m.media-amazon.com/images/M/MV5BYjQxNWVmODUtNjY3NC00ODE2LWFhNTItZGY2YzlmYTgzYzJkXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
];

export const ALL_GENRES = [...new Set(MOVIE_CATALOG.map(m => m.genre))].sort();
