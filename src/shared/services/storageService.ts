export class StorageService {

  static async get<T>(
    key: string
  ): Promise<T | null> {

    const result =
      await chrome.storage.local.get(
        key
      );

    return result[key] ?? null;
  }

  static async set(
    key: string,
    value: unknown
  ) {

    await chrome.storage.local.set({
      value
    });

  }

  static async remove(
    key: string
  ) {

    await chrome.storage.local.remove(
      key
    );

  }

}
``