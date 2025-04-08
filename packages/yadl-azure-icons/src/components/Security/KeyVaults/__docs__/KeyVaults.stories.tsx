import type { Meta, StoryObj } from "@storybook/react";
import KeyVaults from "../KeyVaults";

const meta: Meta<typeof KeyVaults> = { title: "Azure/Security/KeyVaults", component: KeyVaults };

export default meta;
type Story = StoryObj<typeof KeyVaults>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
