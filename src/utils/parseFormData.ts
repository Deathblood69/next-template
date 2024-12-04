export function parseFormData<T>(formData: FormData) {
  const object = Array.from(formData.entries()).reduce((acc, [key, value]) => {
    // @ts-expect-error Le type de la valeur est inconnu
    acc[key] = value
    return acc
  }, {})

  return object as T satisfies T
}
