import type { Meta, StoryObj } from "@storybook/react";
import Season_changeSeasonChange from "../Season_changeSeasonChange";

const meta: Meta<typeof Season_changeSeasonChange> = { title: "unDraw/Season_changeSeasonChange", component: Season_changeSeasonChange };

export default meta;
type Story = StoryObj<typeof Season_changeSeasonChange>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
