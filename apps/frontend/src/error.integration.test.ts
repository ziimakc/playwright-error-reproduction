import { PrismaClient } from "@libs/orm";
import { expect, test } from "@playwright/test";

test("should edit user", async ({ context, browser, page }) => {
	console.log(PrismaClient)

	await expect(1).toBe(1);
});
