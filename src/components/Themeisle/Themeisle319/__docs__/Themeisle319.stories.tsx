import type { Meta, StoryObj } from "@storybook/react";
import Themeisle319 from "../Themeisle319";

const meta: Meta<typeof Themeisle319> = { title: "Themeisle/Themeisle319", component: Themeisle319 };

export default meta;
type Story = StoryObj<typeof Themeisle319>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
