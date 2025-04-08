import type { Meta, StoryObj } from "@storybook/react";
import Themeisle403 from "../Themeisle403";

const meta: Meta<typeof Themeisle403> = { title: "Themeisle/Themeisle403", component: Themeisle403 };

export default meta;
type Story = StoryObj<typeof Themeisle403>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
