class Twitter {
  private tweets: { tweetId: number; userId: number }[] = []
  private users: Record<string, number[]>

  constructor() {
    this.tweets = []
    this.users = {}
  }

  postTweet(userId: number, tweetId: number): void {
    this.tweets.push({ tweetId, userId })
  }

  getNewsFeed(userId: number): number[] {
    const followees = this.users[userId]

    const res: number[] = []
    const ids = new Set<number>()
    ids.add(userId)

    if (followees) {
      followees.forEach((f) => ids.add(f))
    }

    for (let i = this.tweets.length - 1; i >= 0 && res.length != 10; i--) {
      const t = this.tweets[i]
      if (ids.has(t.userId)) {
        res.push(t.tweetId)
      }
    }

    return res
  }

  follow(followerId: number, followeeId: number): void {
    const followeeIds = this.users[followerId]

    if (!followeeIds) {
      this.users[followerId] = []
    }

    this.users[followerId] = this.users[followerId].filter(
      (f) => f !== followeeId,
    )

    this.users[followerId].push(followeeId)
  }

  unfollow(followerId: number, followeeId: number): void {
    const followeeIds = this.users[followerId]
    if (!followeeIds) {
      return
    }

    this.users[followerId] = followeeIds.filter((f) => f != followeeId)
  }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
