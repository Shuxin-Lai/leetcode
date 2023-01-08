class Twitter {
  private tweets: { userId: number; tweetId: number }[] = []
  private users: Record<string, number[]> = {}
  constructor() {}

  postTweet(userId: number, tweetId: number): void {
    this.tweets.push({
      userId,
      tweetId,
    })
  }

  getNewsFeed(userId: number): number[] {
    const followeesIds = this.users[userId] || []
    const ids = new Set<number>()
    ids.add(userId)
    followeesIds.forEach((f) => ids.add(f))
    const res: number[] = []
    let i = this.tweets.length - 1
    while (res.length < 10 && i >= 0) {
      const feed = this.tweets[i]
      if (ids.has(feed.userId)) {
        res.push(feed.tweetId)
      }

      i--
    }

    return res
  }

  follow(followerId: number, followeeId: number): void {
    if (!this.users[followerId]) {
      this.users[followerId] = []
    }

    this.users[followerId] = this.users[followerId].filter(
      (f) => f != followeeId,
    )
    this.users[followerId].push(followeeId)
  }

  unfollow(followerId: number, followeeId: number): void {
    if (!this.users[followerId]) {
      return
    }
    this.users[followerId] = this.users[followerId].filter(
      (f) => f != followeeId,
    )
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
