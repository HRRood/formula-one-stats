import { PaginationParams } from "@/components/dataTable/DataTable";

type NullableObject<T> = T | undefined | null;

export interface Response<T> {
  succeeded: boolean;
  message: string;
  data: NullableObject<T>;
}
export interface ApiOptions {
  pagination?: PaginationParams;
}

type RequestOptions<T extends Record<string, any>> = RequestInit & ApiOptions;

export const paginationParamsToUrl = (paginationParams: PaginationParams, url: URLSearchParams) => {
  url.append("pageSize", paginationParams.pageSize.toString());
  url.append("pageNumber", paginationParams.pageNumber.toString());
  return url;
};

export class Api {
  public get<T extends Record<string, any>>(url: string, options?: RequestOptions<T>): Promise<Response<T>> {
    return this.sendRequest<T>(url, { ...options, method: "get" });
  }

  public post<T extends Record<string, any>>(url: string, data?: any, options?: RequestOptions<T>): Promise<Response<T>> {
    const body = data instanceof FormData ? data : JSON.stringify(data);
    return this.sendRequest<T>(url, { ...options, method: "post", body });
  }

  public put<T extends Record<string, any>>(url: string, options?: RequestOptions<T>): Promise<Response<T>> {
    return this.sendRequest<T>(url, { ...options, method: "put" });
  }

  public patch<T extends Record<string, any>>(url: string, body?: any, options?: RequestOptions<T>): Promise<Response<T>> {
    return this.sendRequest<T>(url, { ...options, method: "PATCH", body: JSON.stringify(body) });
  }

  public delete<T extends Record<string, any>>(url: string, body?: any, options?: RequestOptions<T>): Promise<Response<T>> {
    return this.sendRequest<T>(url, { ...options, method: "DELETE", body: JSON.stringify(body) });
  }

  private async sendRequest<T extends Record<string, any>>(url: string, options?: RequestOptions<T>): Promise<Response<T>> {
    const headers: HeadersInit = {
      "Accept-Language": "en",
      Accept: "application/json",
      ...(typeof options?.body === "string" ? { "Content-Type": "application/json" } : {}),
      ...options?.headers,
    };
    const urlStr = url.split(/\?(.*)/s);
    const searchParams = urlStr?.[1] || "";
    let urlSearchParams = new URLSearchParams(searchParams);

    // if (options?.filters && options.filters.length > 0) {
    //   urlSearchParams = filterOptionsToUrlSearchParams(options.filters, urlSearchParams);
    // }

    // if (options?.sort) {
    //   urlSearchParams = sortOptionsToUrl([options.sort], urlSearchParams);
    // }

    if (options?.pagination) {
      urlSearchParams = paginationParamsToUrl(options.pagination, urlSearchParams);
    }
    const response = await fetch(`${urlStr[0]}?${urlSearchParams.toString()}`, {
      ...options,
      headers,
    });

    if (response.status >= 200 && response.status < 300) {
      try {
        return response.json();
      } catch {
        return { data: null, message: `parsing json failed, ${url}`, succeeded: false };
      }
    }

    return { data: null, message: "Error", succeeded: false };
  }
}

export const api = new Api();
