// loading.tsx is a special Next.js file built on top of Suspense, it allows you to create fallback UI to show as a replacement while page content loads.
// Now, the loading.tsx file will only apply to your dashboard overview page - a Route Group was created - overview
// Route groups allow you to organize files into logical groups without affecting the URL path structure. When you create a new folder using parentheses (), the name won't be included in the URL path.
// So /dashboard/(overview)/page.tsx becomes /dashboard.

import DashboardSkeleton from '../../ui/skeletons';

export default function Loading() {
  return <DashboardSkeleton />;
}
