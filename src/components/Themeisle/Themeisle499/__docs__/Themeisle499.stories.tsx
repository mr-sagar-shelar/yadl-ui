import type { Meta, StoryObj } from "@storybook/react";
import Themeisle499 from "../Themeisle499";

const meta: Meta<typeof Themeisle499> = { title: "Themeisle/Themeisle499", component: Themeisle499 };

export default meta;
type Story = StoryObj<typeof Themeisle499>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
