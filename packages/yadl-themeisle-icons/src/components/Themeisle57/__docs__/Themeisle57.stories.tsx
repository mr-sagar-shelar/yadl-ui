import type { Meta, StoryObj } from "@storybook/react";
import Themeisle57 from "../Themeisle57";

const meta: Meta<typeof Themeisle57> = { title: "Themeisle/Themeisle57", component: Themeisle57 };

export default meta;
type Story = StoryObj<typeof Themeisle57>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
