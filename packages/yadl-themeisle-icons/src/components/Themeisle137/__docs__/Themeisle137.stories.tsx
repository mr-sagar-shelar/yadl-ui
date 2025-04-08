import type { Meta, StoryObj } from "@storybook/react";
import Themeisle137 from "../Themeisle137";

const meta: Meta<typeof Themeisle137> = { title: "Themeisle/Themeisle137", component: Themeisle137 };

export default meta;
type Story = StoryObj<typeof Themeisle137>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
