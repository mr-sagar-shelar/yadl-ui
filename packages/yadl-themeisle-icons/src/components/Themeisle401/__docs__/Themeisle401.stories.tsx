import type { Meta, StoryObj } from "@storybook/react";
import Themeisle401 from "../Themeisle401";

const meta: Meta<typeof Themeisle401> = { title: "Themeisle/Themeisle401", component: Themeisle401 };

export default meta;
type Story = StoryObj<typeof Themeisle401>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
