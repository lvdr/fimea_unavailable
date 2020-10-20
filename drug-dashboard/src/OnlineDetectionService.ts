export class OnlineDetectionService {
  isOnline(): boolean {
    let url: string = window.location.href;

    return (
      !url.includes("localhost") &&
      !url.includes("192.168") &&
      !url.includes("127.0.0.1")
    );
  }
}
