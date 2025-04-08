import type { Meta, StoryObj } from "@storybook/react";
import Themeisle37 from "../Themeisle37";

const meta: Meta<typeof Themeisle37> = { title: "Themeisle/Themeisle37", component: Themeisle37 };

export default meta;
type Story = StoryObj<typeof Themeisle37>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
