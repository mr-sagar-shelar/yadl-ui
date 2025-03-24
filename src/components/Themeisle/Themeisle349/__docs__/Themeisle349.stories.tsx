import type { Meta, StoryObj } from "@storybook/react";
import Themeisle349 from "../Themeisle349";

const meta: Meta<typeof Themeisle349> = { title: "Themeisle/Themeisle349", component: Themeisle349 };

export default meta;
type Story = StoryObj<typeof Themeisle349>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
