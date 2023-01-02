class Twitter {
  private tweets: { userId: number; tweetId: number }[] = []
  private users: Record<string, number[]> = {}

  constructor() {}

  postTweet(userId: number, tweetId: number): void {
    this.tweets.push({ userId, tweetId })
  }

  getNewsFeed(userId: number): number[] {
    const ids = new Set()
    const followeeIds = this.users[userId]
    if (followeeIds) {
      followeeIds.forEach((f) => ids.add(f))
    }
    ids.add(userId)

    const res: number[] = []

    for (let i = this.tweets.length - 1; i >= 0 && res.length != 10; i--) {
      const tweet = this.tweets[i]
      if (ids.has(tweet.userId)) {
        res.push(tweet.tweetId)
      }
    }

    return res
  }

  follow(followerId: number, followeeId: number): void {
    let user = this.users[followerId] || []
    user = user.filter((f) => f != followeeId)
    user = [...user, followeeId]

    this.users[followerId] = user
  }

  unfollow(followerId: number, followeeId: number): void {
    if (this.users[followerId]) {
      this.users[followerId] = this.users[followerId].filter(
        (f) => f != followeeId,
      )
    }
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
