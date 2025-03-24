import type { Meta, StoryObj } from "@storybook/react";
import Themeisle374 from "../Themeisle374";

const meta: Meta<typeof Themeisle374> = { title: "Themeisle/Themeisle374", component: Themeisle374 };

export default meta;
type Story = StoryObj<typeof Themeisle374>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
