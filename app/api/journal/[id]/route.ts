import { getUserByClerkId } from '@/utils/auth'

export const PATCH = async (request, { params }) => {
  const user = await getUserByClerkId()
}
