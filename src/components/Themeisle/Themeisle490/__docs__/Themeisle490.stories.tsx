import type { Meta, StoryObj } from "@storybook/react";
import Themeisle490 from "../Themeisle490";

const meta: Meta<typeof Themeisle490> = { title: "Themeisle/Themeisle490", component: Themeisle490 };

export default meta;
type Story = StoryObj<typeof Themeisle490>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
