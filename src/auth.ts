export function isAuthenticated() {
  return (next: any) => async (root: any, args: any, context: any, info: any) => {
    if (!context.userId) {
      throw new Error('You are not authenticated!')
    }

    return next(root, args, context, info)
  }
}
