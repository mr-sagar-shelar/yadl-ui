import type { Meta, StoryObj } from "@storybook/react";
import Themeisle54 from "../Themeisle54";

const meta: Meta<typeof Themeisle54> = { title: "Themeisle/Themeisle54", component: Themeisle54 };

export default meta;
type Story = StoryObj<typeof Themeisle54>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
