import type { Meta, StoryObj } from "@storybook/react";
import Themeisle344 from "../Themeisle344";

const meta: Meta<typeof Themeisle344> = { title: "Themeisle/Themeisle344", component: Themeisle344 };

export default meta;
type Story = StoryObj<typeof Themeisle344>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
