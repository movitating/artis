import appRoutes from '@app/routes/app.Routes';
import adminRoutes from '@app/routes/admin.Routes';
import authRoutes from '@app/routes/auth.Routes';
import { createBrowserRouter } from 'react-router';

// 라우터 통합 및 생성 : createBrowserRouter는 반드시 한 번만 호출하며, 라우트 객체를 통합한 후 사용하는 것이 권장됨
const router = createBrowserRouter([...appRoutes, ...adminRoutes, ...authRoutes]);

export default router;
