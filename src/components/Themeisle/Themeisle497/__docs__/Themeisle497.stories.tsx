import type { Meta, StoryObj } from "@storybook/react";
import Themeisle497 from "../Themeisle497";

const meta: Meta<typeof Themeisle497> = { title: "Themeisle/Themeisle497", component: Themeisle497 };

export default meta;
type Story = StoryObj<typeof Themeisle497>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
