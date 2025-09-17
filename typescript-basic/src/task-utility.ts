type Post = {
 id: number;          // id
 title: string;       // タイトル
 body: string;        // 本文
 published: boolean;  // 公開済みかどうか
};

type postEdit = Partial<Post>;//編集中

type showEdit = Pick<Post, 'id' | 'title'>;//一覧表示用

type openEdit = Readonly<Post>;//公開済み

