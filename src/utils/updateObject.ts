export function updateObject(key: string, value: unknown, oldObject?: unknown) {
  return oldObject
    ? {
        ...oldObject,
        [key]: value
      }
    : {
        [key]: value
      }
}
