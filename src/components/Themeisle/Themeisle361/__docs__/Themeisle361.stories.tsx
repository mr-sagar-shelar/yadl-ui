import type { Meta, StoryObj } from "@storybook/react";
import Themeisle361 from "../Themeisle361";

const meta: Meta<typeof Themeisle361> = { title: "Themeisle/Themeisle361", component: Themeisle361 };

export default meta;
type Story = StoryObj<typeof Themeisle361>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
