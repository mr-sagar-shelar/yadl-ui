import type { Meta, StoryObj } from "@storybook/react";
import Themeisle100 from "../Themeisle100";

const meta: Meta<typeof Themeisle100> = { title: "Themeisle/Themeisle100", component: Themeisle100 };

export default meta;
type Story = StoryObj<typeof Themeisle100>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
