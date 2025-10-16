// deno-fmt-ignore-file
// biome-ignore format: generated types do not need formatting
// prettier-ignore
import type { PathsForPages, GetConfigResponse } from 'waku/router';

// prettier-ignore
import type { getConfig as File_About_getConfig } from './pages/about';
// prettier-ignore
import type { getConfig as File_Index_getConfig } from './pages/index';
// prettier-ignore
import type { getConfig as File_RenounSlugIndex_getConfig } from './pages/renoun/[...slug]/index';
// prettier-ignore
import type { getConfig as File_RenounIndex_getConfig } from './pages/renoun/index';

// prettier-ignore
type Page =
| ({ path: '/about' } & GetConfigResponse<typeof File_About_getConfig>)
| ({ path: '/' } & GetConfigResponse<typeof File_Index_getConfig>)
| ({ path: '/renoun/[...slug]' } & GetConfigResponse<typeof File_RenounSlugIndex_getConfig>)
| ({ path: '/renoun' } & GetConfigResponse<typeof File_RenounIndex_getConfig>);

// prettier-ignore
declare module 'waku/router' {
  interface RouteConfig {
    paths: PathsForPages<Page>;
  }
  interface CreatePagesConfig {
    pages: Page;
  }
}
