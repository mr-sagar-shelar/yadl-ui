import type { Meta, StoryObj } from "@storybook/react";
import Themeisle471 from "../Themeisle471";

const meta: Meta<typeof Themeisle471> = { title: "Themeisle/Themeisle471", component: Themeisle471 };

export default meta;
type Story = StoryObj<typeof Themeisle471>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
