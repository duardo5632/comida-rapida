import { test, expect } from "@playwright/test";

test("Verificar si el inicio de seccion sirve o no", async ({ page }) => {
  await page.goto("/login");

  await page.getByRole("textbox", { name: "Nombre" }).fill("Eduardo");
  await page.getByRole("textbox", { name: "Nombre" }).press("Enter");
  await page.getByRole("textbox", { name: "Contraseña" }).fill("tnt5043849");
  await page.getByRole("textbox", { name: "Contraseña" }).press("Enter");
  /* await expect(page).toHaveURL("/menu"); */
});
