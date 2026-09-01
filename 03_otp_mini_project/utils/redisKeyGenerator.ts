export function redisKeyGenerator(key:string):string{
    return `app:${key}`
}