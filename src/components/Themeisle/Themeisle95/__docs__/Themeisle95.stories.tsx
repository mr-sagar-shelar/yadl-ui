import type { Meta, StoryObj } from "@storybook/react";
import Themeisle95 from "../Themeisle95";

const meta: Meta<typeof Themeisle95> = { title: "Themeisle/Themeisle95", component: Themeisle95 };

export default meta;
type Story = StoryObj<typeof Themeisle95>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
