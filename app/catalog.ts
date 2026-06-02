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

// 数据来源：amctheatres.com/movies CDP 实时抓取，2026-06-02
// IMDb 分数：刻入本文件，首页直接按 imdbScore 本地排序，不再 mount 时并发 fetch。
// 自动更新：launchd 每日拉取 AMC 官网，新片 zh 译名由 Gemini 2.5 Flash 生成；
//          新片的 imdbScore 从 OMDb/IMDb 实时抓取；老片 imdbScore 保持继承。
//          rank 保持既有顺序，新片追加末尾；运行 /update-amc 可手动重排评分
export const MOVIE_CATALOG: CatalogMovie[] = [
  { title: "Project Hail Mary",                    zh: "挽救计划",                                 year: "2026", released: "March 20, 2026", genre: "科幻", amc: "project-hail-mary-76779",                   rank:  1, imdbScore: 8.4, posterUrl: "https://m.media-amazon.com/images/M/MV5BNTkwNzJiYTctNzI3NC00NjE1LTlhYjktY2Q5MTdmMWFmNzcxXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "The Super Mario Galaxy Movie",         zh: "超级马里奥银河电影版",                           year: "2026", released: "April 3, 2026",  genre: "动画", amc: "the-super-mario-galaxy-movie-71465",        rank:  2, imdbScore: 6.5, posterUrl: "https://m.media-amazon.com/images/M/MV5BNDMyODQzZjAtNmYxYS00YjNiLWEzYTMtNzgyZWE5ODBkZDVhXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "Michael",                              zh: "迈克",                                   year: "2026", released: "April 24, 2026", genre: "喜剧", amc: "michael-75846",                             rank:  3, imdbScore: 5.7, posterUrl: "https://m.media-amazon.com/images/M/MV5BNzllNmRlN2EtMDQyOC00ODJjLTg4OWQtZDNmNGU3YzlkNjc1XkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "Star Wars: The Mandalorian and Grogu", zh: "Star Wars: The Mandalorian and Grogu", year: "2026", released: "May 22, 2026",   genre: "动作", amc: "star-wars-the-mandalorian-and-grogu-60322", rank:  4, imdbScore: null, posterUrl: "https://m.media-amazon.com/images/M/MV5BYzVkMmJhNTgtNjYwOS00YjM0LThlNWEtNGExNmIxZjVkMmJhXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "Passenger",                            zh: "旅客",                                   year: "2026", released: "May 22, 2026",   genre: "剧情", amc: "passenger-82485",                           rank:  5, imdbScore: 7.4, posterUrl: "https://m.media-amazon.com/images/M/MV5BNDhmZmJlMDctNTA3MS00NTkwLThkZGQtMjM5MTdmMDg2YjBjXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "I Love Boosters",                      zh: "我爱",                                   year: "2026", released: "May 22, 2026",   genre: "动作", amc: "i-love-boosters-82045",                     rank:  6, imdbScore: 5.4, posterUrl: "https://m.media-amazon.com/images/M/MV5BODQwZDU4ZmQtOWE4Yy00ZWZmLTgzZjItNWUxOThmMzcxM2FiXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "The Devil Wears Prada 2",              zh: "The Devil Wears Prada 2",              year: "2026", released: "May 1, 2026",    genre: "喜剧", amc: "the-devil-wears-prada-2-80466",             rank:  7, imdbScore: 7.0, posterUrl: "https://m.media-amazon.com/images/M/MV5BZmM3ZDU3ODItZmY5Yi00OTQ2LWE5OTctZTA5NDBhMWJkOGY3XkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "Obsession",                            zh: "痴迷",                                   year: "2026", released: "May 15, 2026",   genre: "剧情", amc: "obsession-82063",                           rank:  8, imdbScore: 6.7, posterUrl: "https://m.media-amazon.com/images/M/MV5BYzc1NWUwMDgtNGZlMS00ZmYzLWIzMzktNmMxMmY1MTUzNWExXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "Mortal Kombat II",                     zh: "真人",                                   year: "2026", released: "May 8, 2026",    genre: "动作", amc: "mortal-kombat-ii-71233",                    rank:  9, imdbScore: null, posterUrl: "https://m.media-amazon.com/images/M/MV5BNTg2YWNkN2EtMzc1Ny00ZTBhLWFmYTItMmMyNzhjNjhhNmVhXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "The Sheep Detectives",                 zh: "The Sheep Detectives",                 year: "2026", released: "May 8, 2026",    genre: "动作", amc: "the-sheep-detectives-77276",                rank: 10, imdbScore: null, posterUrl: "https://m.media-amazon.com/images/M/MV5BNTFmZWI4YmMtNmQ0ZC00ZGQwLTk1OWEtZjAyZmIzOGY0MGFiXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "Is God Is",                            zh: "是神",                                   year: "2026", released: "May 15, 2026",   genre: "剧情", amc: "is-god-is-81156",                           rank: 11, imdbScore: null, posterUrl: "https://m.media-amazon.com/images/M/MV5BMmI0ODU5MjUtYWY1OC00ZTNmLWE0ZDAtZTdkOTZhNzI4ZDllXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "In the Grey",                          zh: "In",                                   year: "2026", released: "May 15, 2026",   genre: "动作", amc: "in-the-grey-76240",                         rank: 12, imdbScore: 8.3, posterUrl: "https://m.media-amazon.com/images/M/MV5BMTZkMTIzMTItMTQwZS00MTg4LWE0MTEtM2NiNmUzYjRmMGUxXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "Corporate Retreat",                    zh: "公司度假",                                 year: "2026", released: "May 22, 2026",   genre: "恐怖", amc: "corporate-retreat-82853",                   rank: 13, imdbScore: 3.9, posterUrl: "https://m.media-amazon.com/images/M/MV5BNTZkZmU4OWEtMDcwNi00MGQ5LTlkZTQtODY5YzFiMThjZWM3XkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "Saccharine",                           zh: "糖",                                    year: "2026", released: "May 22, 2026",   genre: "剧情", amc: "saccharine-83191",                          rank: 14, imdbScore: 6.5, posterUrl: "https://m.media-amazon.com/images/M/MV5BMWNhNjFjZjYtNmViNi00MDRmLTk3ZTMtYmRiMDBhMTlkMjY1XkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "Hokum",                                zh: "H",                                    year: "2026", released: "May 1, 2026",    genre: "恐怖", amc: "hokum-82191",                               rank: 15, imdbScore: 7.5, posterUrl: "https://m.media-amazon.com/images/M/MV5BZjA1ZjFlZGItNTVjZC00NTFhLTg2YTEtODMzODRmNGFiNTdmXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "Backrooms",                            zh: "后室",                                   year: "2026", released: "May 29, 2026",   genre: "恐怖", amc: "backrooms-83009",                           rank: 16, imdbScore: 7.1, posterUrl: "https://m.media-amazon.com/images/M/MV5BYzQyYjZmMjctMzIyZi00MDI0LWJhNGQtMzQ3MTFlNDgwNGM5XkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "The Breadwinner",                      zh: "The Breadwinner",                      year: "2026", released: "May 29, 2026",   genre: "动画", amc: "the-breadwinner-79903",                     rank: 17, imdbScore: 7.7, posterUrl: "https://m.media-amazon.com/images/M/MV5BZTQ3ZWQ4YTctMTI0OC00NmI5LWFlNjgtNjhhMDQxYjUxYTQyXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "Pressure",                             zh: "压力",                                   year: "2026", released: "May 29, 2026",   genre: "剧情", amc: "pressure-82757",                            rank: 18, imdbScore: 5.6, posterUrl: "https://m.media-amazon.com/images/M/MV5BYjkwMTkwYzItNTg4MC00OTc2LTk2Y2EtOGU3ZGE0NmQyYzdjXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "Revolutionary America",                zh: "革命",                                   year: "2026", released: "May 31, 2026",   genre: "剧情", amc: "revolutionary-america-83234",               rank: 19, imdbScore: null, posterUrl: "https://m.media-amazon.com/images/M/MV5BMDYyMGQ3MWUtMjYzZi00ZTAwLTg2Y2MtMGQzZWExNWRkNTc1XkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "Tuner",                                zh: "调",                                    year: "2026", released: "May 22, 2026",   genre: "剧情", amc: "tuner-82606",                               rank: 20, imdbScore: 7.3, posterUrl: "https://m.media-amazon.com/images/M/MV5BNDA0ZjZjYTktZjg1MC00MDRiLWEzYjItMTQ1ZWFkOTUxNjc0XkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "Pitfall",                              zh: "陷",                                    year: "2026", released: "May 29, 2026",   genre: "剧情", amc: "pitfall-83516",                             rank: 21, imdbScore: 7.1, posterUrl: null },
  { title: "Power Ballad",                         zh: "Power Ballad",                         year: "2026", released: "May 29, 2026",   genre: "喜剧", amc: "power-ballad-81983",                        rank: 22, imdbScore: 7.3, posterUrl: "https://m.media-amazon.com/images/M/MV5BYWI3NGZlNDQtMTAwMC00MGVmLTkyMzgtNjNmYjFhY2VhNDUyXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "Phi Phong: The Blood Demon",           zh: "Phi Phong: The Blood Demon",           year: "2026", released: "May 29, 2026",   genre: "动作", amc: "phi-phong-the-blood-demon-83517",           rank: 23, imdbScore: null, posterUrl: null },
  { title: "Psycho",                               zh: "Psycho",                               year: "2026", released: "May 27, 2026",   genre: "剧情", amc: "psycho-83373",                              rank: 24, imdbScore: 8.5, posterUrl: null },
];

export const ALL_GENRES = [...new Set(MOVIE_CATALOG.map(m => m.genre))].sort();
