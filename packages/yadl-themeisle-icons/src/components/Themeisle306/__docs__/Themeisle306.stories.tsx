import type { Meta, StoryObj } from "@storybook/react";
import Themeisle306 from "../Themeisle306";

const meta: Meta<typeof Themeisle306> = { title: "Themeisle/Themeisle306", component: Themeisle306 };

export default meta;
type Story = StoryObj<typeof Themeisle306>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
