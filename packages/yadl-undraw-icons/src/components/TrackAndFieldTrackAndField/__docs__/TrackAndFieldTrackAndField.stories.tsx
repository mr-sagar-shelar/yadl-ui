import type { Meta, StoryObj } from "@storybook/react";
import TrackAndFieldTrackAndField from "../TrackAndFieldTrackAndField";

const meta: Meta<typeof TrackAndFieldTrackAndField> = { title: "unDraw/TrackAndFieldTrackAndField", component: TrackAndFieldTrackAndField };

export default meta;
type Story = StoryObj<typeof TrackAndFieldTrackAndField>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
