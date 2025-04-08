import type { Meta, StoryObj } from "@storybook/react";
import Themeisle143 from "../Themeisle143";

const meta: Meta<typeof Themeisle143> = { title: "Themeisle/Themeisle143", component: Themeisle143 };

export default meta;
type Story = StoryObj<typeof Themeisle143>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
