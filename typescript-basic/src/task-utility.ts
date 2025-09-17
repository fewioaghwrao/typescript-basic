type Post = {
 id: number;          // id
 title: string;       // タイトル
 body: string;        // 本文
 published: boolean;  // 公開済みかどうか
};

type processPost = Partial<Post>;//編集中

type showPost = Pick<Post, 'id' | 'title'>;//一覧表示用

type openPost = Readonly<Post>;//公開済み

