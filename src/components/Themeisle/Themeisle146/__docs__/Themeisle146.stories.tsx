import type { Meta, StoryObj } from "@storybook/react";
import Themeisle146 from "../Themeisle146";

const meta: Meta<typeof Themeisle146> = { title: "Themeisle/Themeisle146", component: Themeisle146 };

export default meta;
type Story = StoryObj<typeof Themeisle146>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
