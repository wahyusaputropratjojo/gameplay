import type { Session } from "$lib/server/auth";

declare global {
  namespace App {
    interface Locals {
      session: Session;
    }
    interface PageData {
      session: Session;
    }
  }
}

export {};
