import { getAccessToken } from "@/services/api";

export async function fetchWithAuth(url: string, options: RequestInit, refresh: string) {
  // Выполнение первоначального запроса

  let res = await fetch(url, options);

  // Проверка на истечение Access токена (401 Unauthorized)
  if (res.status === 401) {
    const newAccessToken = await getAccessToken(refresh); // Получение нового Access токена
    console.log(newAccessToken);

    // Повторный запрос с новым токеном
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${newAccessToken}`,
    };
    res = await fetch(url, options); // Повторный запрос с обновленными заголовками
  }

  // Проверка успешности запроса
  if (!res.ok) {
    throw new Error(res.statusText); // Выброс ошибки при неудачном запросе
  }

  return res; // Возврат ответа
}
