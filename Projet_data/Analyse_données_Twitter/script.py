import tweepy
import sqlite3

# 1️⃣ Configuration de l’API Twitter
API_KEY = "TA_CLE_API"
API_SECRET = "TA_CLE_SECRET"
ACCESS_TOKEN = "TON_ACCESS_TOKEN"
ACCESS_TOKEN_SECRET = "TON_ACCESS_SECRET"

auth = tweepy.OAuthHandler(API_KEY, API_SECRET)
auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SECRET)
api = tweepy.API(auth, wait_on_rate_limit=True)

# 2️⃣ Récupération des tweets
query = "#AI -filter:retweets"
tweets = tweepy.Cursor(api.search_tweets, q=query, lang="fr", tweet_mode="extended").items(10)

# 3️⃣ Connexion à la base SQLite
conn = sqlite3.connect("tweets.db")
cursor = conn.cursor()

cursor.execute("""
    CREATE TABLE IF NOT EXISTS tweets (
        id INTEGER PRIMARY KEY,
        username TEXT,
        content TEXT,
        likes INTEGER,
        retweets INTEGER,
        date TEXT
    )
""")

# 4️⃣ Insérer les tweets dans la base
for tweet in tweets:
    cursor.execute("INSERT INTO tweets VALUES (?, ?, ?, ?, ?, ?)", 
                   (tweet.id, tweet.user.screen_name, tweet.full_text, tweet.favorite_count, tweet.retweet_count, tweet.created_at))

conn.commit()
conn.close()
print("✅ Données enregistrées avec succès !")
