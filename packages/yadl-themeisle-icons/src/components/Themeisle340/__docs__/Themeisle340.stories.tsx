import type { Meta, StoryObj } from "@storybook/react";
import Themeisle340 from "../Themeisle340";

const meta: Meta<typeof Themeisle340> = { title: "Themeisle/Themeisle340", component: Themeisle340 };

export default meta;
type Story = StoryObj<typeof Themeisle340>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
