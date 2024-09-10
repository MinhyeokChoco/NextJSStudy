/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["127.0.0.1"], // 허용해줄 도메인의 호스트 주소, 만약 외부에서 가져온다면 API 배포한 경로
    }
};

export default nextConfig;
