import { clsx } from 'clsx/lite';

import { CreatePostForm } from 'features/create-post';
import { PostList } from 'widgets/post-list';

export const HomePage = () => (
  <div className="flex min-h-screen justify-center py-4">
    <div
      className={clsx(
        'grid',
        'w-1/3',
        'grid-cols-1',
        'grid-rows-[1fr_auto]',
        'gap-2',
      )}
    >
      <PostList />
      <CreatePostForm />
    </div>
  </div>
);
