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

// 数据来源：amctheatres.com/movies CDP 实时抓取，2026-05-21
// IMDb 分数：刻入本文件，首页直接按 imdbScore 本地排序，不再 mount 时并发 fetch。
// 自动更新：launchd 每日拉取 AMC 官网，新片 zh 译名由 Gemini 2.5 Flash 生成；
//          新片的 imdbScore 从 OMDb/IMDb 实时抓取；老片 imdbScore 保持继承。
//          rank 保持既有顺序，新片追加末尾；运行 /update-amc 可手动重排评分
export const MOVIE_CATALOG: CatalogMovie[] = [
  { title: "Project Hail Mary",                                       zh: "挽救计划",                                 year: "2026", released: "March 20, 2026", genre: "科幻", amc: "project-hail-mary-76779",                                      rank:  1, imdbScore: 8.4, posterUrl: "https://m.media-amazon.com/images/M/MV5BNTkwNzJiYTctNzI3NC00NjE1LTlhYjktY2Q5MTdmMWFmNzcxXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "The Super Mario Galaxy Movie",                            zh: "超级马里奥银河电影版",                           year: "2026", released: "April 3, 2026",  genre: "动画", amc: "the-super-mario-galaxy-movie-71465",                           rank:  2, imdbScore: 6.5, posterUrl: "https://m.media-amazon.com/images/M/MV5BNDMyODQzZjAtNmYxYS00YjNiLWEzYTMtNzgyZWE5ODBkZDVhXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "Michael",                                                 zh: "迈克",                                   year: "2026", released: "April 24, 2026", genre: "喜剧", amc: "michael-75846",                                                rank:  3, imdbScore: 5.7, posterUrl: "https://m.media-amazon.com/images/M/MV5BNzllNmRlN2EtMDQyOC00ODJjLTg4OWQtZDNmNGU3YzlkNjc1XkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "Star Wars: The Mandalorian and Grogu",                    zh: "Star Wars: The Mandalorian and Grogu", year: "2026", released: "May 22, 2026",   genre: "动作", amc: "star-wars-the-mandalorian-and-grogu-60322",                    rank:  4, imdbScore: null, posterUrl: "https://m.media-amazon.com/images/M/MV5BYzVkMmJhNTgtNjYwOS00YjM0LThlNWEtNGExNmIxZjVkMmJhXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "Passenger",                                               zh: "旅客",                                   year: "2026", released: "May 22, 2026",   genre: "剧情", amc: "passenger-82485",                                              rank:  5, imdbScore: 7.4, posterUrl: "https://m.media-amazon.com/images/M/MV5BNDhmZmJlMDctNTA3MS00NTkwLThkZGQtMjM5MTdmMDg2YjBjXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "I Love Boosters",                                         zh: "我爱",                                   year: "2026", released: "May 22, 2026",   genre: "动作", amc: "i-love-boosters-82045",                                        rank:  6, imdbScore: 5.4, posterUrl: "https://m.media-amazon.com/images/M/MV5BODQwZDU4ZmQtOWE4Yy00ZWZmLTgzZjItNWUxOThmMzcxM2FiXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "The Devil Wears Prada 2",                                 zh: "The Devil Wears Prada 2",              year: "2026", released: "May 1, 2026",    genre: "喜剧", amc: "the-devil-wears-prada-2-80466",                                rank:  7, imdbScore: 7.0, posterUrl: "https://m.media-amazon.com/images/M/MV5BZmM3ZDU3ODItZmY5Yi00OTQ2LWE5OTctZTA5NDBhMWJkOGY3XkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "Obsession",                                               zh: "痴迷",                                   year: "2026", released: "May 15, 2026",   genre: "剧情", amc: "obsession-82063",                                              rank:  8, imdbScore: 6.7, posterUrl: "https://m.media-amazon.com/images/M/MV5BYzc1NWUwMDgtNGZlMS00ZmYzLWIzMzktNmMxMmY1MTUzNWExXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "Mortal Kombat II",                                        zh: "真人",                                   year: "2026", released: "May 8, 2026",    genre: "动作", amc: "mortal-kombat-ii-71233",                                       rank:  9, imdbScore: null, posterUrl: "https://m.media-amazon.com/images/M/MV5BNTg2YWNkN2EtMzc1Ny00ZTBhLWFmYTItMmMyNzhjNjhhNmVhXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "The Sheep Detectives",                                    zh: "The Sheep Detectives",                 year: "2026", released: "May 8, 2026",    genre: "动作", amc: "the-sheep-detectives-77276",                                   rank: 10, imdbScore: null, posterUrl: "https://m.media-amazon.com/images/M/MV5BNTFmZWI4YmMtNmQ0ZC00ZGQwLTk1OWEtZjAyZmIzOGY0MGFiXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "Is God Is",                                               zh: "是神",                                   year: "2026", released: "May 15, 2026",   genre: "剧情", amc: "is-god-is-81156",                                              rank: 11, imdbScore: null, posterUrl: "https://m.media-amazon.com/images/M/MV5BMmI0ODU5MjUtYWY1OC00ZTNmLWE0ZDAtZTdkOTZhNzI4ZDllXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "In the Grey",                                             zh: "In",                                   year: "2026", released: "May 15, 2026",   genre: "动作", amc: "in-the-grey-76240",                                            rank: 12, imdbScore: 8.3, posterUrl: "https://m.media-amazon.com/images/M/MV5BMTZkMTIzMTItMTQwZS00MTg4LWE0MTEtM2NiNmUzYjRmMGUxXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "Corporate Retreat",                                       zh: "公司度假",                                 year: "2026", released: "May 22, 2026",   genre: "恐怖", amc: "corporate-retreat-82853",                                      rank: 13, imdbScore: 3.9, posterUrl: "https://m.media-amazon.com/images/M/MV5BNTZkZmU4OWEtMDcwNi00MGQ5LTlkZTQtODY5YzFiMThjZWM3XkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "Godzilla Minus One",                                      zh: "哥",                                    year: "2026", released: "May 22, 2026",   genre: "动作", amc: "godzilla-minus-one-83528",                                     rank: 14, imdbScore: 7.7, posterUrl: null },
  { title: "Saccharine",                                              zh: "糖",                                    year: "2026", released: "May 22, 2026",   genre: "剧情", amc: "saccharine-83191",                                             rank: 15, imdbScore: 6.5, posterUrl: "https://m.media-amazon.com/images/M/MV5BMWNhNjFjZjYtNmViNi00MDRmLTk3ZTMtYmRiMDBhMTlkMjY1XkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "May Contain: My Life",                                    zh: "May Contain: My Life",                 year: "2026", released: "May 22, 2026",   genre: "剧情", amc: "may-contain-my-life-83717",                                    rank: 16, imdbScore: null, posterUrl: null },
  { title: "Mobile Suit Gundam Hathaway: The Sorcery of Nymph Circe", zh: "机动",                                   year: "2026", released: "May 15, 2026",   genre: "动画", amc: "mobile-suit-gundam-hathaway-the-sorcery-of-nymph-circe-83285", rank: 17, imdbScore: 7.3, posterUrl: "https://m.media-amazon.com/images/M/MV5BNWJjZmEyZDEtYmRhNS00OTJlLWEzNjMtYzQ1ZWY5ZTA5NzYxXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "Billie Eilish - Hit Me Hard and Soft: The Tour",          zh: "比",                                    year: "2026", released: "May 8, 2026",    genre: "剧情", amc: "billie-eilish-hit-me-hard-and-soft-the-tour-live-in-3d-82310", rank: 18, imdbScore: 4.5, posterUrl: null },
  { title: "Hokum",                                                   zh: "H",                                    year: "2026", released: "May 1, 2026",    genre: "恐怖", amc: "hokum-82191",                                                  rank: 19, imdbScore: 7.5, posterUrl: "https://m.media-amazon.com/images/M/MV5BZjA1ZjFlZGItNTVjZC00NTFhLTg2YTEtODMzODRmNGFiNTdmXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "Chand Mera Dil",                                          zh: "Chand",                                year: "2026", released: "May 22, 2026",   genre: "剧情", amc: "chand-mera-dil-83861",                                         rank: 20, imdbScore: null, posterUrl: "https://m.media-amazon.com/images/M/MV5BNGNkZmVlOGItNTE5OS00NGYzLTk1MmUtZGQzNjQxNjlmMjhlXkEyXkFqcGc@._V1_QL90_UX1200_.jpg" },
  { title: "Top Gun 40th Anniversary",                                zh: "Top Gun 40th Anniversary",             year: "2026", released: "May 13, 2026",   genre: "动作", amc: "top-gun-40th-anniversary-82312",                               rank: 21, imdbScore: null, posterUrl: null },
  { title: "Top Gun: Maverick",                                       zh: "壮",                                    year: "2026", released: "May 13, 2026",   genre: "动作", amc: "top-gun-maverick-83421",                                       rank: 22, imdbScore: 8.2, posterUrl: null },
  { title: "The Wizard of the Kremlin",                               zh: "克",                                    year: "2026", released: "May 15, 2026",   genre: "剧情", amc: "the-wizard-of-the-kremlin-83123",                              rank: 23, imdbScore: 6.1, posterUrl: null },
  { title: "Shrek: 25th Anniversary",                                 zh: "Shrek: 25th Anniversary",              year: "2026", released: "May 15, 2026",   genre: "喜剧", amc: "shrek-25th-anniversary-83268",                                 rank: 24, imdbScore: null, posterUrl: null },
];

export const ALL_GENRES = [...new Set(MOVIE_CATALOG.map(m => m.genre))].sort();
