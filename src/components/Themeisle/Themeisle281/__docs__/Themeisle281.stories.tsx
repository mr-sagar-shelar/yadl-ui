import type { Meta, StoryObj } from "@storybook/react";
import Themeisle281 from "../Themeisle281";

const meta: Meta<typeof Themeisle281> = { title: "Themeisle/Themeisle281", component: Themeisle281 };

export default meta;
type Story = StoryObj<typeof Themeisle281>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
