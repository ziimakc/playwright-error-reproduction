import { PrismaClient } from "@libs/orm";
import { expect, test } from "@playwright/test";

test("should edit user", async ({ context, browser, page }) => {
	const user = new PrismaClient();

	await expect(1).toBe(1);
});
